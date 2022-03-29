class MathUtil {

    static sum(...numbers) {

        if(numbers.length === 0) {
            //const error = new Error("......")
            throw new Error("Total parameter harus lebih dari 0");
        }


        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}


try {
    console.log(MathUtil.sum(50,5,6));
    console.log("Eko");
} catch (error) {                   //jika di try tidak terjadi error, catch tidak dieksekusi
    console.log(`Terjadi error : ${error.message}`);   //jika try error, maka catch dieksekusi
} finally {     //finally -> selalu dieksekusi setelah catch (entah terjadi eror atau tidak)
    console.log(`Program selesai`);
}

console.log("Budi");



class Counter {

    #counter = 1;

    next() {
//        return this.#counter;
//        this.#counter++;                 perintah ini tidak akan dilakukan karena keburu direturn (gunakan try & finally)

        try {
            return this.#counter;
        } finally {
            this.#counter++;
        }
    }
}


const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
