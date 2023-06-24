function sumaRecursiva(arr, n) {
	if (n <= 0) {
		return 0;
	} else {
		return sumaRecursiva(arr, n-1) + arr[n-1];
	}
}

console.log(sumaRecursiva([2,3,4,5],2));
