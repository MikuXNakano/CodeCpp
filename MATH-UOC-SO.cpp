#include <bits/stdc++.h>
using namespace std;
long long dem_uoc(long long n)
{
    long long s=sqrt(n);
    long long dem=0;
    for(long long i=1;i<sqrt(n);i++)
        if(n%i==0)
            dem++;
    dem*=2;
    if(s*s==n)
     return dem+1;
    else return dem;
}
long long t,a,b;
int main()
{
    cin>>t;
    while(t--)
       {
            cin>>a>>b;
            cout<<dem_uoc(a*b)<<"\n";
       } 
   
}

