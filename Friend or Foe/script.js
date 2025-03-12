console.log("Hello world!");

function friend(friends) {
	// let allFriends = [];

	// for (fr of friends) {
	// 	if (fr.length === 4) {
	// 		allFriends.push(fr);
	// 	}
	// }

	// return allFriends;
	return friends.filter((friend) => friend.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);

console.log(
	friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
	["Jimm", "Cari", "aret"]
);

console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
