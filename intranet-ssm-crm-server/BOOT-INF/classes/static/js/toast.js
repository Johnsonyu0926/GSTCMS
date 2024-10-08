function toast(data) {
    var duration = isNaN(data['duration']) ? 3000 : data['duration'];
    var m = document.createElement("div")
    m.innerHTML = data['msg'];
    m.style.cssText = "font-size: .32rem;color: rgb(255, 255, 255);background-color: rgba(0, 0, 0, 0.6);padding: 10px 15px;margin: 0 0 0 -60px;border-radius: 4px;position: fixed; top: 10%;left: 48%;width: 130px;text-align: center;z-index: 99999999;";
    if (data['type'] === 'success') {
        m.style.cssText = m.style.cssText + 'color: #66df6b;'
    } else if (data['type'] === 'error') {
        m.style.cssText = m.style.cssText + 'color: #c75653;'
    } else if (data['type'] === 'warning') {
        m.style.cssText = m.style.cssText + 'color: #e4e16de0;'
    }
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.opacity = "0";
        setTimeout(function () { document.body.removeChild(m) }, d * 1000);
    }, duration);
}