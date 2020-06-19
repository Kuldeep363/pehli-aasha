myApp
.controller('noticeCtrl',($scope,$http)=>{
    $scope.notices = ''
    let apiData = {
        method:'POST',
        url:'http://127.0.0.1:8000/api/details/get-notices',
        headers:{
            'Content-Type':'application/json'
        }
    }

    $http(apiData)
    .then((resp)=>{
        $scope.notices = resp.data
    })
})