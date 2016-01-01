angular.module('exampleApp')
.value('luckyNumbers', [
    {number: 7, text: 'seven'},
    {number: 11, text: 'eleven'}
])
.value('tabs', [
    {path: '/page1', label: 'Personal'},
    {path: '/page2', label: 'Deeply private'},
    {path: '/page3', label: 'Important'},
    {path: '/pageConfirm', label: 'Confirm'}
]);