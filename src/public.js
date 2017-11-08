import Toast from './components/toast/toast'
import Alert from './components/alert/alert'
import Loading from './components/loading/loading'
import Load from './components/load/load'

/*公共弹框*/
var $toast;
function toast(msg,pos,time) {
	$toast =Toast({
			message:msg,
			position: pos? pos:'middle',
			duration: time ? time : 1500
		})
	return $toast;
}
function hidetoast(){
	return $toast.close();
}
var $loading;
function loading(msg,pos,time) {
	$loading = Loading({
		message:msg,
		position: pos? pos:'middle',
		duration:time ? time : 1500
	})
	return $loading;
}
function hideloading(){
	return $loading.close();
}
var $load;
function load(msg,time) {
	$load = Load({
		message:msg,
		position: 'middle',
		duration:time ? time : 1500
	})
	return $load;
}
function hideload(){
	return $load.close();
}
function alert(title,msg) {
	Alert.show({
		title:title,
		message:msg,
		type:'inform'
	});
}
function confirm(title,msg,params,fun1,fun2) {
	Alert.confirm({
		title:title,
		message:msg,
		type:'confirm',
		context:params,
		sureBtn:fun1,
		cancelBtn:fun2
	});
}
export default {
	toast: toast,
	alert:alert,
	confirm:confirm,
	loading:loading,
	load:load,
	hideloading:hideloading,
	hideload:hideload,
	hidetoast:hidetoast

}