function showline() {
   
    var randomNumber = Math.floor(Math.random() * 3);
  var urls = [
            'https://line.me/ti/p/wo.47022@works-104035',
            'https://line.me/ti/p/wo.81282@works-60924',
            'https://line.me/ti/p/wo.39272@works-739982',
            'https://line.me/ti/p/tggs512@wsq896',
            'https://line.me/ti/p/gbsd965@dws542',
            'https://line.me/ti/p/gbsd965@dws542',
            'https://line.me/ti/p/gbsd965@dws542'
                ];
    // 检查localStorage中是否已存储
        var selectedUrl = localStorage.getItem("userNumber0525");
		 // 如果没有存储，随机选择一个手机号并存储
        if (selectedUrl==null) {
        selectedUrl = urls[randomNumber];
		localStorage.setItem("userNumber0525", selectedUrl);
		}
  gtag_report_conversion(selectedUrl);
 }