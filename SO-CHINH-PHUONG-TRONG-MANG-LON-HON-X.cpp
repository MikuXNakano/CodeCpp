#include <bits/stdc++.h>
using namespace std;
long long n, x, a[100004];
bool scp(long long n)
{
    long long k = sqrt(n);
    if (k * k == n)
        return true;
    else
        return false;
}
int main()
{
    cin >> n >> x;
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }
    for (int i = 1; i <= n; i++)
    {
        if (scp(a[i]) > x)
            cout << a[i] << " ";
    }
}
