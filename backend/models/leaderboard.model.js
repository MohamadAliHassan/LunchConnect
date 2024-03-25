const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

const leaderboardData = await User.aggregate([
  {
    $match: { profileCompleted: true }
  },
  {
    $group: {
      _id: '$country',
      totalPoints: { $sum: '$points' }
    }
  },
  {
    $sort: { totalPoints: -1 }
  }
]);

// 3. Store leaderboard data
await Leaderboard.insertMany(leaderboardData);

// 4. Display leaderboard
const leaderboard = await Leaderboard.find().limit(10); // Get top 10 leaderboard entries

// 5. Update user data (optional)
// Iterate over the leaderboard and update user documents with their rank
leaderboard.forEach(async (entry, index) => {
  const { _id: country, totalPoints } = entry;
  const users = await User.find({ country }).sort({ points: -1 });
  users.forEach(async (user, rank) => {
    await User.updateOne({ _id: user._id }, { rank: rank + 1 });
  });
});
