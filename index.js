module.exports = function addScript(url, cb) {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.src = url

    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function addScriptLoad() {
        if (!this.readyState
          || this.readyState == 'loaded'
          || this.readyState == 'complete') {
            cb && cb()
            script.onload = script.onreadystatechange = null
            head.removeChild(script)
        }
    }
    head.appendChild(script)
}