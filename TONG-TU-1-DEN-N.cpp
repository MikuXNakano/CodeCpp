#include <bits/stdc++.h>
using namespace std;
long long n, t;
main()
{
    cin >> t;
    while (t--)
    {
        cin >> n;
        cout << n * (n + 1) / 2 << "\n";
    }
}