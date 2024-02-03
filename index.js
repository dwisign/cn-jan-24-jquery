$(document).ready(function(){

    //onclick at tag
    // $('p').click(function(){
    //     $(this).hide()
    // })

    //onclick at class
    $('#textId').click(function(){
        $(this).hide()
    })

    //onclick show other element
    $('#show').click(function(){
        $('#hiddenElement').show()
    })

    $('#hide').click(function(){
        $('#hiddenElement').hide()
    })

    //ondblclick show other element
    $('#showDbl').dblclick(function(){
        $('#hiddenDblElement').show()
    })

    //toggle
    $('#btnToggle').click(function(){
        $('#contentToggle').toggle()
        if($(this).text() == 'Show'){
            $(this).text('Hide')
        }else{
            $(this).text('Show')
        }
    })

    //blur
    $('#name').blur(function(){
        //$('.alertName').show()

        if($(this).val() == ''){
            $('.alertName').show()
        }else{
            $('.alertName').hide()
        }
    })

    $('#email').blur(function(){
        //$('.alertName').show()
        if($(this).val() == ''){
            $('.alertEmail').show()
        }else{
            $('.alertEmail').hide()
        }
    })

    $('#company').change(function(){
        $('.alertCompany').show()
    })

    $('.btnOn').click(function(){
        $('li').addClass('active')
    })

    $('.btnOff').click(function(){
        $('li').removeClass('active')
    })

    $('.box').mouseover(function(){
        $(this).animate({
            marginLeft: '300px',
            width: '100px'
        },500).css({
            'background-color': 'green'
        })
    })

    $('.box').mouseout(function(){
        $(this).animate({
            marginLeft: '0px',
            width: '200px'
        },500).css({
            'background-color': 'red'
        })
    })


    //PRODUCT TABS
    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-colors div a:not(:first)').addClass('inactive')

    $('.product-colors div a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('.product-colors div a').addClass('inactive')
            $(this).removeClass('inactive')
        }
        console.log(n)

        $('.product-item').hide()
        $('#' + n + 'image').show()
    })

})
