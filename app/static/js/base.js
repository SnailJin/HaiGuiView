/**
 * Created by liguang.jin on 2016/3/31.
 */
var url="http://47.89.38.171/HGZGZ/interface";
var formData = {
    "body":{},
    "code":0,
    "key":"",
    "message":"",
    "time":new Date().getTime(),
    "token":"",
    "uuid":""}
var rootApp =angular.module('rootApp',['ui.bootstrap']);
//µ¯¿ò²å¼þ
rootApp.directive("poplayer",function() {
    return {
        template: '<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" ng-model="modal-title">{{modal-title}}</h4></div><div class="modal-body" ng-model="modal-body">{{modal-body}}</div><div class="modal-footer"><button type="button" class="btn btn-primary">È·¶¨</button></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal -->'
    }
});