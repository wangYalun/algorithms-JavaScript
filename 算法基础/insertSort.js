/*
插入排序算法
*/
var a=[4,6,1,5,3,2,7];

for(var i=1,len=a.length;i<len;i++){
	for(var j=i-1;j>=0&&a[j]>a[j+1];j--){
		var temp=a[j];
		a[j]=a[j+1];
		a[j+1]=temp;
	}	
}
console.log(a);

// 1-C(10,0)*(1/3)^10

function m(m,n){
	if(n==0){
		return 1;
	}
	var s=m;
	for(var i=1;i<n;i++){
		s=s*m;
	}
	return s;
}

function c(m,n){
	var a=m;
	var b=n;
	if(n==0){
		return 1;
	}
	if(n==1){
		return m;
	}
	var k=n;
	for(var i=2;i<=n;i++){
		a=a*(--m);
		b=b*(--k);

	}
	return a/b;
}

//console.log(c(5,5)*m(2/3,5));
var g=0;
for(var i=0;i<=10;i++){
	g=g+c(10,i)*m(1/3,i)*m(2/3,10-i);
}
console.log(g);

console.log(1-c(10,10)*m(1/3,10)*m(2/3,0));

 


