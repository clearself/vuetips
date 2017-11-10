//解决路由切换弹框不消失问题
export default {
	mounted () {
        let listener = () => {
            this.visible = false;
        }
        window.addEventListener('hashchange', listener);
        window.addEventListener('popstate', listener);
        window.addEventListener('pagehide', listener);
	}
}