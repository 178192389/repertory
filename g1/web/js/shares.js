    var fixed2 = function(val){
        if(typeof val != 'number'){
            return '';
        }
        return val.toFixed(2);
    }
    var cols = [
            {   
                title : '股票代码',  
                name : 'ziduan1',  
                width : 100,  
                align : 'center',  
                sortable : true,  
                lockDisplay : true  
                }, {  
                    title : '股票名称',  
                    name : 'ziduan2',  
                    width : 100,  
                    align : 'center',  
                    sortable : true,  
                    lockDisplay : true  
             },
            {
                title:'今收盘',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'涨跌幅',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'涨跌额',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'振幅',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'成交量',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'成交额',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'昨收盘',
                align:'center',
                width:80,
                sortable : true
            },{
                title:'今开盘',
                align:'center',
                width:80,
                sortable : true
            }
            ];  
    function mmg(){
        $('#mmg').mmGrid({ 
            width:'100%', 
            height : '98%',  
            cols : cols,  
            // url : '/uploads/rs/412/rrczw3xl/stockQuotePage.json', //axaj  获取 数据  
            sortName : 'SECUCODE',  
            sortStatus : 'asc',  
            multiSelect : true, //多选  
            checkCol : true, //选框列  
            fullWidthRows : true, //伸展列宽自动充满表格  
            nowrap : true, //内容不折行  
            loadingText:'正在加载...',
            noDataText:'没有数据',
            // plugins : [ $('#pg').mmPaginator({}) ]//分页插件  
        });
    }
    mmg();  
