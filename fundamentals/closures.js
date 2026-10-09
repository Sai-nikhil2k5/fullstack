function x(){

    var count = 0
    this.increment = function () {
        count += (count + 1)
        console.log(count)
    }
    this.decrement = function () {
        count += (count - 1)
        console.log(count)
    }

}

var res = new x()

res.increment()
res.increment()
res.increment()

res.decrement()