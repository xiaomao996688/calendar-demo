const monthArr = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
const date = new Date()
  function add () {
    const cYear = date.getFullYear()
    const cMonth = date.getMonth()
    const cWeek = date.getDay()
    const cDay = date.getDate() //当前的天
    // 每个月的第一天是周几
    const week = new Date(cYear, cMonth, 1).getDay()
    // 获取没给月的天数
    const montLastDay = new Date(cYear,cMonth +1, -1).getDate() + 1 //最后一天的前一天
    // console.log(cDay, 'cDay')
    // console.log(week, '周几')
    // console.log(montLastDay, 'montLastDay')
    document.getElementById('nian').innerHTML = cYear
    document.getElementById('yue').innerHTML = monthArr[cMonth]
    

    let html = ''
    for (var i = 0; i < week; i++) {
      html+= `<li></li>`
    }
    for (var i =1 ;i <= montLastDay; i++) {
      if ( i === cDay) {
        html+= `<li class="active hover"> ${i}</li>`
      } else {
        html+= `<li class="hover"> ${i}</li>`
      }
    
    }
    document.getElementById('date').innerHTML = html
  }
  add()
  document.getElementById('prev').onclick = function () {
    date.setMonth(date.getMonth() -1)
    add()
  }
  document.getElementById('next').onclick = function () {
    date.setMonth(date.getMonth() +1)
    add()
  }