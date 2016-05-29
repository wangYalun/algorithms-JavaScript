//归并排序
var A=[1,3,5,7,2,4,6,8];

function mergeSort(p,r){
	if(p<r){
		var q=Math.floor((p+r)/2);
		mergeSort(p,q);
		mergeSort(q+1,r);
		merge(p,q,r);
	}else{

	}
}
//var he=1;
function merge(p,q,r){

	// console.log("第"+he+"次合并");
	// console.log(p+" "+q+" "+r);
	// console.log("合并前:");
	// console.log(A);
	var L=[],R=[];
	for(var i=p;i<=q;i++){
		L.push(A[i]);
	}
	for(var j=q+1;j<=r;j++){
		R.push(A[j]);
	}
	L.push(Number.MAX_VALUE);
	R.push(Number.MAX_VALUE);
	i=0;
	j=0;
	for(var k=p;k<=r;k++){
		if(L[i]<R[j]){
			A[k]=L[i];
			i++;
		}else{
			A[k]=R[j];
			j++;
		}
	}
	// console.log("合并后:");
	// console.log(A);
	// he++;
}
//merge(0,3,7);
mergeSort(0,7);
console.log(A);
