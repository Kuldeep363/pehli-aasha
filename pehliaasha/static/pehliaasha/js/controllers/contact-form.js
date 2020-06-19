myApp
.directive('pName',function(){
    return {
        require:'ngModel',
        link:function(scope,element,attr,mCtrl){
            function nameValidation(value){
                let pat = /[0-9~!@#$%^&*()_+<>?/:;.{}]/i
                
                let valid = pat.test(value)
                // console.log(value,valid)
                mCtrl.$setValidity('nameValid',!valid)
                return value
            }
            mCtrl.$parsers.push(nameValidation)
        }
    }
})
.directive('pMsg',function(){
    return {
        require:'ngModel',
        link:function(scope,element,attr,mCtrl){
            function msgValidation(value){
                
                let valid = value === ''|| value === null?true:false
                // console.log(value,valid)
                mCtrl.$setValidity('msgValid',!valid)
                return value
            }
            mCtrl.$parsers.push(msgValidation)
        }
    }
})
.controller('contactCtrl',function($scope,$http){
    $scope.pName = ''
    $scope.pEmail = ''
    $scope.pMsg = ''
    $scope.status = " "
    $scope.sending = false
    // console.log($scope.status)
    $scope.contactUs = function(){
        $scope.sending = true
        console.log('submit')
        let req = {
            method:'POST',
            url:'http://127.0.0.1:8000/api/email/contact',
            data:{
                'pName':$scope.pName,
                'pEmail':$scope.pEmail,
                'pMsg':$scope.pMsg,
            }
        }
        $http(req)
        .then((resp)=>{
            console.log(resp.data.msg)
            $scope.status = resp.data.msg
            $scope.sending = false
            document.getElementById('contactForm').reset()
            document.documentElement.scrollTop = 0 
        },(error)=>{
            $scope.sending = false
            $scope.status = false
        })
    }
})
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
    
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])
.controller('joinCtrl',function($scope,$http){
    $scope.fName = $scope.lName = $scope.dob = $scope.pEmail = $scope.phone = $scope.org = $scope.pMsg = $scope.accept = ''
    $scope.sending = false
    $scope.upload = function(){
        document.querySelector('#joinForm #id').click()
    }
    
    $scope.status = ' '
    
    $scope.passData = ()=>{
        $scope.sending = true
        let datas = {
            firstName: $scope.fName,
            lastName:$scope.lName,
            dob:$scope.dob,
            email:$scope.pEmail,
            phone:$scope.phone,
            organization:$scope.org,
            msg:$scope.pMsg,
            condition:$scope.accept
        }
        var fd = new FormData();
        
        fd.append('model',angular.toJson(datas))
        fd.append('image', $scope.file.image);
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:8000/api/details/join-data',
            data: fd,
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).then((resp)=>{
            $scope.status = resp.data.msg
            document.body.scrollTop = 0 
            document.documentElement.scrollTop = 0
            document.getElementById('joinForm').reset()
            $scope.sending = false
        },(err)=>{
            $scope.status = false
            $scope.sending = false
        })
    
    }
})
