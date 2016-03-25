;(function() {
	angular
	.module("myapp", [])
	.controller("FirstCtrl", [FirstCtrl]);

	function FirstCtrl() {
		var vm = this;

		var ROW = 100 , COLUMN = 20;
		vm.array = [];

		function initializeArray() {
			for(var i = 0; i < ROW; i++) {
				var x = [];
				for(var j = 0; j < COLUMN; j++) {
					x.push("ROW " + (i+1) + ", COLUMN "+ (j+1));
				}
				vm.array.push(x);
			}
		}

		initializeArray();
	}
})();