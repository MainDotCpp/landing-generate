<?php

// 获取客户端语言偏好
$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];

// 日志函数 - 记录到同级目录
function writeLog($message) {
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[{$timestamp}] {$message}" . PHP_EOL;
    file_put_contents(__DIR__ . '/access.log', $logEntry, FILE_APPEND | LOCK_EX);
}

// 记录请求信息
writeLog("=== 新请求开始 ===");
writeLog("客户端IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
writeLog("User-Agent: " . ($_SERVER['HTTP_USER_AGENT'] ?? 'unknown'));
writeLog("Accept-Language: " . $lang);

// 如果请求的首选语言为英文，则返回英文内容
if (str_starts_with($lang, 'ja')) {
    // 正常 - 日文分支
    $filename = "136b460f124cab1c4e83fa8d04e34442.js";
    writeLog("语言检测: 日文 - 返回文件: " . $filename);
    echo file_get_contents($filename);
} else {
    // 寿司 - 其他语言分支
    $filename = "d433a3cfff9dfbb7bfe4b55d783a7d7e.js";
    writeLog("语言检测: 非英文 - 返回文件: " . $filename);
    echo file_get_contents($filename);
}

writeLog("=== 请求处理完成 ===");