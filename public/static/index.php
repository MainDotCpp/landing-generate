<?php
// 设置错误处理
error_reporting(E_ALL);
ini_set('display_errors', 0);

// 获取访问信息
$ip = getClientIP();
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
$timestamp = date('Y-m-d H:i:s');
$referer = $_SERVER['HTTP_REFERER'] ?? 'Direct';
$requestUri = $_SERVER['REQUEST_URI'] ?? '';

// 检查 content.html 文件是否存在
$contentFile = __DIR__ . '/content.html';
if (!file_exists($contentFile)) {
    http_response_code(404);
    echo "Content file not found.";
    exit;
}

// 读取并输出 content.html 文件
$content = file_get_contents($contentFile);
if ($content === false) {
    http_response_code(500);
    echo "Error reading content file.";
    exit;
}

// 设置适当的 Content-Type
header('Content-Type: text/html; charset=UTF-8');

// 输出内容
echo $content;

// 异步记录访问日志
if (function_exists('fastcgi_finish_request')) {
    // 如果支持 fastcgi_finish_request，使用它来异步处理
    fastcgi_finish_request();
}

// 记录访问日志
logAccess($ip, $userAgent, $timestamp, $referer, $requestUri);

/**
 * 获取客户端真实 IP 地址
 */
function getClientIP() {
    $ipKeys = [
        'HTTP_CF_CONNECTING_IP',     // Cloudflare
        'HTTP_X_FORWARDED_FOR',      // 代理服务器
        'HTTP_X_FORWARDED',          // 代理服务器
        'HTTP_X_CLUSTER_CLIENT_IP',  // 集群
        'HTTP_FORWARDED_FOR',        // 代理服务器
        'HTTP_FORWARDED',            // 代理服务器
        'HTTP_CLIENT_IP',            // 代理服务器
        'REMOTE_ADDR'                // 标准
    ];
    
    foreach ($ipKeys as $key) {
        if (!empty($_SERVER[$key])) {
            $ips = explode(',', $_SERVER[$key]);
            $ip = trim($ips[0]);
            
            // 验证 IP 地址格式
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    // 如果没有找到公网 IP，返回 REMOTE_ADDR
    return $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
}

/**
 * 记录访问日志
 */
function logAccess($ip, $userAgent, $timestamp, $referer, $requestUri) {
    try {
        $logDir = __DIR__ . '/logs';
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        
        $logFile = $logDir . '/access_' . date('Y-m-d') . '.log';
        
        // 构建日志条目
        $logEntry = [
            'timestamp' => $timestamp,
            'ip' => $ip,
            'user_agent' => $userAgent,
            'referer' => $referer,
            'request_uri' => $requestUri,
            'server_name' => $_SERVER['SERVER_NAME'] ?? 'Unknown'
        ];
        
        // 将日志写入文件（JSON 格式，便于后续分析）
        $logLine = json_encode($logEntry, JSON_UNESCAPED_UNICODE) . "\n";
        
        // 使用文件锁确保并发写入安全
        file_put_contents($logFile, $logLine, FILE_APPEND | LOCK_EX);
        
        // 可选：同时记录简化的纯文本日志
        $simpleLogFile = $logDir . '/access_simple_' . date('Y-m-d') . '.log';
        $simpleLogLine = sprintf(
            "[%s] %s - %s - %s - %s\n",
            $timestamp,
            $ip,
            substr($userAgent, 0, 100), // 限制 UA 长度
            $referer,
            $requestUri
        );
        file_put_contents($simpleLogFile, $simpleLogLine, FILE_APPEND | LOCK_EX);
        
    } catch (Exception $e) {
        // 静默处理日志错误，不影响用户访问
        error_log("Access logging failed: " . $e->getMessage());
    }
}
?>
