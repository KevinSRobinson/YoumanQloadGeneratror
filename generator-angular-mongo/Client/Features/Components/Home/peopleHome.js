var volunteersHome = {
    controllerAs: "vm",
    templateUrl: 'src/client/Features//Volunteers/Components/Home/volunteersHome.Html',
    controller: function () {
        var vm = this;
        vm.volunteers = [];

         vm.getFileName = function(){
            var d = new Date(); 
            return "volunteers_" + d.getDay() + '.' + d.toString("MMMM")  + '.' + d.toString("YYYY") + ".csv";
        }

        //generates a flat data list
        vm.getItems = function () {


            //get the header list
            var headers = vm.headers;


            var items = [];

            //loop through the clients
            angular.forEach(vm.volunteers, function (contact, key) {

                //build 
                var item = {};

                angular.forEach(headers, function (value, key) {
                    item[value] = contact[value];
                });

                items.push(item);
            });

            return items;
        }

        vm.headers = ['OldId',
            'IsActive',
            'Title',
            'FirstName',
            'LastName',
            'Dob',
            'Address1',
            'Address2',
            'Address3',
            'Town',
            'PostCode',
            'Address',
            'Tel',
            'Mobile',
            'Area',
            'DateJoined',
            'Clients',
            'Tags',
            'InductionTraining',
            'BackcareAwareness',
            'FirstcarAwareness',
            'FirsAidCourse',
            'AgeLinkCourse',
            'CreatedOn'
        ];
    }

};


angular.module('app').component('volunteersHome', volunteersHome);