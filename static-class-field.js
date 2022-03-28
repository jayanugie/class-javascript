//STATIC (static) adalah katakunci yang bisa ditambahkan sebelum field atau method

class Configuration {

    static name = "Belajar Javascript OOP";
    static version = 1.0;
    static author = "Eko Kurniawan";

}


const config = new Configuration();
console.log(config);

Configuration.author = "Budi Saputra";

console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);