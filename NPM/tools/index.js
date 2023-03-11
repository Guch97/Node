function dateFormat(dateStr){
   const dt = new Date(dateStr)
   const y = dt.getFullYear()
   const m = dt.getMonth()+1
   const h = dt.getHours()
   const mm = dt.getMinutes()
   const ss = dt.getSeconds()
   return `${y}/${m}/${h}/${mm}/${ss}`
}

module.exports  = {
   dateFormat
}