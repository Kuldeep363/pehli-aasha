myApp
.controller('noticeCtrl',($scope,$http)=>{
    $scope.notices = ''
    let apiData = {
        method:'POST',
        url:'https://pehliaasha.herokuapp.com/api/details/get-notices',
        headers:{
            'Content-Type':'application/json'
        }
    }

    $http(apiData)
    .then((resp)=>{
        $scope.notices = resp.data
    })
})