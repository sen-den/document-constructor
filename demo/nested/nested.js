/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        preamble: "\\documentclass\[a4paper,12pt,oneside,draft\]\{extreport\}",
        templates: {
        	containers: [
	        	{title: "Стандартный блок", type: "container", id: 1, columns: [[]], _latex: "{", latex_: "}", bold: "0", italic: "0"},
	        	{title: "Блок справа", type: "container", id: 1, columns: [[]], _latex: "\begin{flushright}", latex_: "\end{flushright}"},
	        ],
	        atoms: [
		    	{title: "Текст", type: "text", id: 2, default: "Измените текст", value: "Замените на свой текст"},
		        {title: "Ввод", type: "input", id: 11, default: "Введите текст", value: " "},
		        {title: "Дата", type: "date", id: 12, default: "01-01-2017"},
		    ],
		    structures: [		    	
        		{title: "Адресант", type: "container", id: 1, columns: [[
					  {"title": "Ввод", "type": "input", "id": 11, "default": "Введите текст", "value": "Ректору ХГУ"},
					  {"title": "Ввод", "type": "input", "id": 11, "default": "Введите текст", "value": "проф. Стратонову В.М."},
        		]]},
        		{title: "Адресат", type: "container", id: 1, columns: [[
					  {"title": "Текст", "type": "text", "id": 11, "default": "Введите текст", "value": "студента"},
					  {title: "Ввод", type: "input", id: 11, default: "Введите курс", value: "3"},
					  {"title": "Текст", "type": "text", "id": 11, "default": "Введите текст", "value": "курса"},
					  {title: "Ввод", type: "input", id: 11, default: "Введите курс", value: "Иванова Ивана Ивановича"},
        		]]},
        		{title: "Заголовок", type: "container", id: 1, columns: [[
        			{title: "Ввод", type: "input", id: 11, default: "Введите текст", value: "Заголовок"},
        			]], _latex: "\begin{center}\MakeUppercase{", latex_: "}\end{center}"},
        		{title: "Подпись", type: "container", id: 1, columns: [[
					  {"title": "Ввод", "type": "input", "id": 11, "default": "Введите текст", "value": "Должность"},
					  {"title": "Ввод", "type": "input", "id": 11, "default": "Введите текст", "value": "И.О. Фамилия"},
        		]]},
        		
        		{title: "!!Образец", type: "container", id: 1, columns: [[
    {
      "title": "Блок справа",
      "type": "container",
      "id": 1,
      "columns": [
        [
          {
            "title": "Адресант",
            "type": "container",
            "id": 1,
            "columns": [
              [
                {
                  "title": "Ввод",
                  "type": "input",
                  "id": 11,
                  "default": "Введите текст",
                  "value": "Ректору ХГУ"
                },
                {
                  "title": "Ввод",
                  "type": "input",
                  "id": 11,
                  "default": "Введите текст",
                  "value": "проф. Стратонову В.М."
                }
              ]
            ]
          },
          {
            "title": "Адресат",
            "type": "container",
            "id": 1,
            "columns": [
              [
                {
                  "title": "Текст",
                  "type": "text",
                  "id": 11,
                  "default": "Введите текст",
                  "value": "студента"
                },
                {
                  "title": "Ввод",
                  "type": "input",
                  "id": 11,
                  "default": "Введите курс",
                  "value": "3"
                },
                {
                  "title": "Текст",
                  "type": "text",
                  "id": 11,
                  "default": "Введите текст",
                  "value": "курса"
                },
                {
                  "title": "Ввод",
                  "type": "input",
                  "id": 11,
                  "default": "Введите курс",
                  "value": "Иванова Ивана Ивановича"
                }
              ]
            ]
          }
        ]
      ],
      "_latex": "\begin{flushright}",
      "latex_": "end{flushright}"
    },
    {
      "title": "Заголовок",
      "type": "container",
      "id": 2,
      "columns": [
        [
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "Заголовок"
          }
        ]
      ],
      "_latex": "\begin{center}MakeUppercase{",
      "latex_": "}end{center}"
    },
    {
      "title": "Стандартный блок",
      "type": "container",
      "id": 1,
      "columns": [
        [
          {
            "title": "Текст",
            "type": "text",
            "id": 2,
            "default": "Измените текст",
            "value": "Я,"
          },
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "Иванов Иван Иванович"
          },
          {
            "title": "Текст",
            "type": "text",
            "id": 3,
            "default": "Измените текст",
            "value": ", прошу отчислить меня из ХГУ с"
          },
          {
            "title": "Дата",
            "type": "date",
            "id": 13,
            "default": "01-01-2017",
            "value": "2017-12-21T22:00:00.000Z"
          },
          {
            "title": "Текст",
            "type": "text",
            "id": 4,
            "default": "Измените текст",
            "value": "По собственному желанию."
          }
        ]
      ],
      "_latex": "{",
      "latex_": "}",
      "bold": "0",
      "italic": "0"
    },
    {
      "title": "Дата",
      "type": "date",
      "id": 14,
      "default": "01-01-2017",
      "value": "2017-12-21T22:00:00.000Z"
    },
    {
      "title": "Текст",
      "type": "text",
      "id": 5,
      "default": "Измените текст",
      "value": "Погоджено:"
    },
    {
      "title": "Подпись",
      "type": "container",
      "id": 1,
      "columns": [
        [
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "Декан факультету"
          },
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "В.И. Кузьмич"
          }
        ]
      ]
    },
    {
      "title": "Подпись",
      "type": "container",
      "id": 2,
      "columns": [
        [
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "Глава Студенческого совета факультета"
          },
          {
            "title": "Ввод",
            "type": "input",
            "id": 11,
            "default": "Введите текст",
            "value": "А.К. Шувалов"
          }
        ]
      ]
    }
  ]]},
        		
		    ]
        },
        dropzones: {
            "Template": [
                
            ]            
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});

