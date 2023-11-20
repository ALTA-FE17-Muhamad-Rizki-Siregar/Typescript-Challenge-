function playWithAsterik(n: number): void {
    for (let i = 1; i <= n; i++) {
        let space = '';
        let asterisks = '';
        
        // Menambahkan spasi
        for (let j = n - i; j > 0; j--) {
            space += ' ';
        }

        // Menambahkan bintang
        for (let k = 1; k <= i; k++) {
            asterisks += '* ';
        }

        console.log(space + asterisks);
    }
}

// Contoh pemanggilan fungsi dengan parameter 5
playWithAsterik(5);
