//STATIC (static) adalah katakunci yang bisa ditambahkan sebelum field atau method

class Configuration {

    static name = "Belajar Javascript OOP";
    static version = 1.0;
    static author = "Eko Kurniawan";

}


const config = new Configuration();
console.log(config);

//jika ingin ganti isi nilai field
Configuration.author = "Budi Saputra";

//cara akses static class field
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);