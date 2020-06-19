myApp
.controller('subscribeCtrl',($scope,$http)=>{
    $scope.sending = false
    $scope.visitorName=''
    $scope.msg = ' '
    $scope.status = 'wrong'
    $scope.subscribe  = ()=>{

        $scope.sending = true
        let context = {
            method:'POST',
            url:'http://127.0.0.1:8000/api/email/subscribe',
            data:{
                mail:$scope.visitorName
            }
        }

        $http(context)
        .then((resp)=>{
            // console.log(resp.data.msg)
            $scope.sending = false
            $scope.status = resp.data.msg
            document.getElementById('subsForm').reset()
        })
        .then(
            setTimeout(function(){
                $scope.status = 'wrong'
                // console.log($scope.status)
            },3000)
        )
    }
})