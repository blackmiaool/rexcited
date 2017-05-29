int numSquares(int n) {
    static vector < int > dp {
        0
    };
    while (dp.size() <= n) {
        int m = dp.size(), squares = INT_MAX;
        for (int i = 1; i * i <= m; ++i)
            squares = min(squares, dp[m - i * i] + 1);
        dp.push_back(squares);
    }
    return dp[n];
}

function numSquares(n) {
    var dp = [];
    while (dp.length <= n) {
        var m = dp.length,
            squares = Infinity;
        for (var i = 0; i * i <= m; ++i) {
            console.log(m, i)
            squares = Math.min(squares, (dp[m - i * i] || 1) + 1);
        }
        dp.push(squares);

    }
    return dp[n];

}
