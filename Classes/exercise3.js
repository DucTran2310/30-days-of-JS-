// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
// and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
// You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. 
// Check the output below.



class Statistics {
    constructor(ages) {
        this.ages = ages;
    }
    getCount() {
        return this.ages.length;
    }
    getSum() {
        const sumOfAges = this.ages.reduce((sum, a) => sum + a)
        return sumOfAges;
    }
    getMin() {
        const minOfAges = [...this.ages];
        minOfAges.sort();
        return minOfAges[0];
    }
    getMax() {
        const maxOfAges = [...this.ages];
        maxOfAges.sort();
        return maxOfAges[maxOfAges.length - 1]
    }
    getRange() {
        return `${this.getMax()-this.getMin()}`
    }
    getMean() {
        return `${Math.round(this.getSum()/this.getCount())}`
    }
    getMedian() {
        const medianArr = [...this.ages]
        medianArr.sort()
        const index = Math.ceil((medianArr.length) / 2)
        const median = medianArr[index - 1]
        return median
    }
    describe() {
        return {
            Count: this.getCount(),
            Sum: this.getSum(),
            Min: this.getMin(),
            Max: this.getMax(),
            Range: this.getRange(),
            Mean: this.getMean(),
            Median: this.getMedian(),
        }
    }
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)
const describe = statistics.describe()
console.log(describe)
console.log(JSON.stringify(describe, undefined, 4))