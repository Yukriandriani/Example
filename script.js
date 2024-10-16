// Dapatkan elemen canvas
const ctx = document.getElementById('myChart').getContext('2d');

// Inisialisasi grafik dengan Chart.js
const myChart = new Chart(ctx, {
    type: 'bar', // Tipe grafik (bar, line, pie, dll.)
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'  ], // Label untuk sumbu x
        datasets: [{
            label: 'Penjualan (dalam ribu)',
            data: [12, 19, 3, 5, 2, 3, 15, 10, 8, 13, 18, 20 ], // Data untuk setiap label
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 215, 0, 0.4)',    // Emas
                'rgba(34, 139, 34, 0.2)',    // Hijau hutan
                'rgba(0, 128, 128, 0.2)',    // Teal
                'rgba(220, 20, 60, 0.2)',    // Crimson
                'rgba(70, 130, 180, 0.2)',   // SteelBlue
                'rgba(238, 130, 238, 0.2)'   // Violet
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 215, 0, 1)',     // Emas
                'rgba(34, 139, 34, 1)',      // Hijau hutan
                'rgba(0, 128, 128, 1)',      // Teal
                'rgba(220, 20, 60, 1)',      // Crimson
                'rgba(70, 130, 180, 1)',     // SteelBlue
                'rgba(238, 130, 238, 1)'     // Violet

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
