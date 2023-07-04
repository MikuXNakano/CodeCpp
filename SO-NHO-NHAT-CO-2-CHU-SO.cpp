#include <bits/stdc++.h>
using namespace std;
long long n, a[1004], mina = 0;
main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }
    for (int i = 1; i <= n; i++)
    {
        if (a[i] >= 10 and a[i] <= 99)
        {
            mina = min(mina, a[i]);
        }
    }
    cout << mina;
}