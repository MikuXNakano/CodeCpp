#include <bits/stdc++.h>
using namespace std;
long long a[105][105], n, s = 0;
int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            cin >> a[i][j];
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            if (j == i)
                s = s + a[i][j];
    cout << s;
}