<?php
// 只保留检测功能

// 获取真实IP地址的方法（如需日志可保留，否则可省略）
function getRealIP() {
    $headers = [
        'HTTP_CF_CONNECTING_IP',
        'HTTP_X_REAL_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_FORWARDED',
        'HTTP_X_CLUSTER_CLIENT_IP',
        'HTTP_FORWARDED_FOR',
        'HTTP_FORWARDED',
        'HTTP_CLIENT_IP',
        'REMOTE_ADDR'
    ];
    foreach ($headers as $header) {
        if (!empty($_SERVER[$header])) {
            $ips = $_SERVER[$header];
            if (strpos($ips, ',') !== false) {
                $ipList = explode(',', $ips);
                $ips = trim($ipList[0]);
            }
            return trim($ips);
        }
    }
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

// 调用 detect 接口函数
function callDetectApi($headers) {
    $url = 'https://fuck-google.sroorz.com/detect';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 3);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    // 过滤掉不应转发的 header
    $skipHeaders = ['Content-Length', 'Connection', 'Accept-Encoding'];
    $curlHeaders = [];
    foreach ($headers as $key => $value) {
        if (!in_array($key, $skipHeaders)) {
            $curlHeaders[] = $key . ': ' . $value;
        }
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, $curlHeaders);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($httpCode === 200 && $response) {
        return json_decode($response, true);
    }
    return null;
}

// 收集客户端 header
$clientHeaders = [];
foreach ($_SERVER as $key => $value) {
    if (strpos($key, 'HTTP_') === 0) {
        $headerName = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($key, 5)))));
        $clientHeaders[$headerName] = $value;
    }
}

// 调用 detect 接口
$detectResult = callDetectApi($clientHeaders);
$filename = 'block.js';
if ($detectResult && isset($detectResult['result']) && $detectResult['result'] === true) {
    $filename = 'white.js';
}
echo file_get_contents($filename);