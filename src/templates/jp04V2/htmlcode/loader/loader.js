// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
});

// 主要的内容加载函数
function loadContent() {
    try {
        // 显示加载提示
        document.body.innerHTML = '<div class="loading">正在加载内容...</div>';
        

            // 从content.js获取HTML内容
            const content = getHtmlContent();
            
            // 替换页面内容
            document.body.innerHTML = content;
            

            

        
    } catch (error) {
        console.error('加载内容时出错:', error);

    }
}



// 返回原始内容函数
function loadOriginalContent() {
    loadContent();
}

// 提供一些实用函数
const PageLoader = {
    // 加载指定内容
    loadContent: function(contentFunction) {
        try {
            const content = contentFunction();
            document.body.innerHTML = content;
            return true;
        } catch (error) {
            console.error('加载内容失败:', error);
            return false;
        }
    },
    
    // 渐进式加载
    loadWithAnimation: function(contentFunction, delay = 300) {
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            this.loadContent(contentFunction);
            document.body.style.transition = 'opacity 0.3s ease-in-out';
            document.body.style.opacity = '1';
        }, delay);
    },
    
    // 错误处理
    handleError: function(message) {
        document.body.innerHTML = `<div class="loading" style="color: #e74c3c;">${message}</div>`;
    }
};

// 暴露到全局作用域
window.PageLoader = PageLoader;
window.loadContent = loadContent;
window.loadOriginalContent = loadOriginalContent; 