'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data mahasiswa sesuai id
exports.tampilberdasarkanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res) {
    var nim_mahasiswa = req.body.nim_mahasiswa;
    var nama_mahasiswa = req.body.nama_mahasiswa;
    var jurusan_mahasiswa = req.body.jurusan_mahasiswa;

    connection.query('INSERT INTO mahasiswa (nim_mahasiswa, nama_mahasiswa, jurusan_mahasiswa) VALUES(?,?,?)', [nim_mahasiswa, nama_mahasiswa, jurusan_mahasiswa],
        function(error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan data!", res)
            }
        });
};