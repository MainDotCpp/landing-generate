<?php

$blackList = [
    '27.121.51.73',
    '150.100.16.71',
    '210.139.253.68'
];

// 获取客户端语言偏好
$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];

// 自定义日志位置
$logFile = __DIR__ . '/logs/access.log';

// Bark 推送配置
$barkKey = '49cUNPqxEMoXhNHTPjEW35'; // 替换为你的 Bark Key
$barkUrl = 'https://api.day.app';

// IP2Location API Key
$ip2locationApiKey = 'E5944BD8AAC6618AFEC2E378D44C1A77';

// 确保日志目录存在
$logDir = dirname($logFile);
if (!is_dir($logDir)) {
    mkdir($logDir, 0755, true);
}

// 获取真实IP地址的方法
function getRealIP() {
    // 按优先级检查各种可能包含真实IP的头信息
    $headers = [
        'HTTP_CF_CONNECTING_IP',     // Cloudflare
        'HTTP_X_REAL_IP',            // Nginx 代理
        'HTTP_X_FORWARDED_FOR',      // 通用代理
        'HTTP_X_FORWARDED',          // 通用代理
        'HTTP_X_CLUSTER_CLIENT_IP',  // 集群代理
        'HTTP_FORWARDED_FOR',        // RFC 7239
        'HTTP_FORWARDED',            // RFC 7239
        'HTTP_CLIENT_IP',            // 客户端IP
        'REMOTE_ADDR'                // 默认远程地址
    ];
    
    foreach ($headers as $header) {
        if (!empty($_SERVER[$header])) {
            $ips = $_SERVER[$header];
            
            // 处理可能包含多个IP的情况（如 X-Forwarded-For: client, proxy1, proxy2）
            if (strpos($ips, ',') !== false) {
                $ipList = explode(',', $ips);
                $ips = trim($ipList[0]); // 取第一个IP（通常是客户端真实IP）
            }
            
            $ips = trim($ips);
            return $ips;
        }
    }
    
    // 如果所有方法都失败，返回默认值
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

// 高效日志函数
function writeLog($message, $logFile) {
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[{$timestamp}] {$message}";
    // 使用error_log，性能比file_put_contents更好
    error_log($logEntry . PHP_EOL, 3, $logFile);
}

// Bark 异步推送函数
function sendBarkNotification($title, $body, $barkUrl, $barkKey) {
    // 只在有效的 Bark Key 时才推送
    if ($barkKey === 'YOUR_BARK_KEY' || empty($barkKey)) {
        return;
    }
    
    $url = $barkUrl . '/' . $barkKey . '/' . urlencode($title) . '/' . urlencode($body) . '?group=cloakTest';
    
    // 异步发送，不阻塞主进程
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 1); // 1秒超时
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);
    curl_setopt($ch, CURLOPT_NOSIGNAL, 1); // 避免信号中断
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    
    // 在后台执行，不等待结果
    curl_exec($ch);
    curl_close($ch);
}

// IP信息查询函数
function getIpInfo($ip, $apiKey) {
    // 忽略私有地址和本地地址
    if ($ip === 'unknown' || filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) === false) {
        return null;
    }

    $url = "https://api.ip2location.io/?key={$apiKey}&ip={$ip}";
    
    // 使用 cURL 获取信息
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3); // 3秒超时
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200 && $response) {
        return json_decode($response, true);
    }
    
    return null;
}

// 获取基本信息
$clientIP = getRealIP();
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
$url = $_SERVER['REQUEST_URI'] ?? 'unknown';

// 默认设置为拦截
$langDetection = "拦截";
$filename = "white.js";
$location = '未知';
$riskInfo = '未知';
$countryCode = 'N/A';
$rawIpInfoForLog = ''; // 用于记录完整的IP信息

// 只有当语言为日语时才查询ipinfo并进行判断
if (str_starts_with($lang, 'ja')) {
    $ipInfo = getIpInfo($clientIP, $ip2locationApiKey);

    if ($ipInfo) {
        $country = $ipInfo['country_name'] ?? '';
        $countryCode = $ipInfo['country_code'] ?? '';
        $city = $ipInfo['city_name'] ?? '';
        $location = trim("{$country} {$city}");
        if (empty($location)) {
            $location = '未知';
        }

        $usageType = $ipInfo['usage_type'] ?? '未知';
        $riskInfo = $usageType; // 使用 usage_type 作为风险信息
        
        $rawIpInfoForLog = json_encode($ipInfo, JSON_UNESCAPED_UNICODE);
    }
    
    // 如果是日本IP且usage_type为ISP，则放行
    if (isset($countryCode) && $countryCode == 'JP' && isset($usageType) && ($usageType == 'ISP' || $usageType == 'MOB')) {
        $langDetection = "放行";
        $filename = "white.js";
    }
}

echo file_get_contents($filename);

// 记录日志
$logMessage = "IP: {$clientIP} | Location: {$countryCode} | Risk: {$riskInfo} | Lang: {$lang} | 检测: {$langDetection} | 文件: {$filename} | UA: {$userAgent}";
if (!empty($rawIpInfoForLog)) {
    $logMessage .= " | Raw: " . $rawIpInfoForLog;
}
writeLog($logMessage, $logFile);

// 发送 Bark 通知（异步）
$title = "网站访问 - {$langDetection}";
$body = "IP: {$clientIP}\n位置: {$countryCode}\n风险: {$riskInfo}\n语言: {$lang}\n文件: " . basename($filename) . "\nUA: {$userAgent}";
sendBarkNotification($title, $body, $barkUrl, $barkKey);