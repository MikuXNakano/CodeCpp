#include <bits/stdc++.h>
using namespace std;
long long n, dem;
int main()
{
    cin >> n;
    for (long long i = 0; i <= n; i++)
    {
        string s;
        cin >> s;
        long long kt = 0;
        for (char i = 0; i <= sizeof(s); i++)
        {
            if (i - '0' == 6)
                kt++;
        }
        if (kt > 0)
            dem++;
    }
    cout << dem;
}