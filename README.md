
Tujuan di buat aplikasi ini adalah untuk memudahkan pencarian dan pengartian
kata Sansekerta ke kata Bahasa Indonesia atau sebaliknya melalui layanan online.


> CATATAN: **MASIH DALAM PENGEMBANGAN AKTIF**.


Penggunaan
----------

`sansekerta-indonesia` merupakan server REST sehingga untuk menggunakannya anda harus mengakses API yang disediakan oleh server ini.

###REST API

####search
`/api/search/:query`

API ini berfungsi untuk mencari arti kata Sansekerta ke dalam Bahasa Indonesia.

> CATATAN : Keluaran query masih dalam bentuk JSON kasar.

Penggunaanya seperti berikut (memakai [httpie][1]), misalnya untuk mencari arti kata sansekerta `pramodya`

    $ http http://localhost:2112/api/search/pramodya

    HTTP/1.1 200 OK
    Connection: keep-alive
    Content-Length: 324
    Content-Type: application/json; charset=utf-8
    Date: Mon, 13 Jan 2014 22:57:26 GMT
    ETag: "885532749"
    X-Powered-By: Express

    {
        "facets": {
            "bahasa": {
                "pemuda": 1,
                "taruna": 1
            }
        },
        "hits": [],
        "idf": {
            "pramodya": 2.4849066497880004
        },
        "query": {
            "facets": [
                "bahasa"
            ],
            "query": [
                "pramodya"
            ]
        },
        "totalHits": 1,
        "transformedQuery": {
            "query": [
                "pramodya"
            ]
        }
    }


####search-engine

#####init
`/api/search-engine/init`

API ini berfungsi untuk meng-inisialisasi search engine agar membuat index dari berkas dan dimasukkan ke database.

> TODO: Diperlukan autentikasi khusus untuk operasi ini.




Fitur & Rencana
---------------

Lihat [Fitur & Rencana][2]


Cara Berkontribusi
------------------

###Umum

Silahkan berkontribusi apa saja asalkan masih berhubungan dengan project ini. Misalnya perbaikan kata kata yang ada di berkas

    data/Sansekerta-Indonesia.txt

Cara berkontribusi yaitu tulis pertanyaan, saran atau perbaikan melalui   https://github.com/cahangon/sansekerta-indonesia/issues

###Developer

Silahkan fork repo ini dan pull request jika ada issue.


####Branch

Pengembangan aktif aplikasi ini berada dalam branch `develop`. Untuk checkout kode sumber pada branch ini ketik perintah berikut

    git clone https://github.com/cahangon/sansekerta-indonesia.git -b develop

####Data

Format sumber data yang akan di index oleh search engine adalah dalam bentuk file JSON. Terletak pada folder `data`.

> TODO: Format file data JSON

----------


Terima Kasih

Team Cah Angon

License
-------

The MIT License (MIT)

Copyright (c) 2014 Cah Angon

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: https://github.com/jkbr/httpie
  [2]: https://github.com/cahangon/sansekerta-indonesia/blob/develop/RENCANA.md