# Answer to the question number : 1

### For a hotfix, it's common to utilize a naming convention that clearly shows the purpose of the branch. A useful format may be:

- hotfix/-brief-description

For example: hotfix/-signup-validation

#### After finalizing my work on the designated branch for the hotfix, I follow these detailed steps to create a PR and merge it with the production branch:

- Push My Branch to the Remote Repository.
- Create a Pull Request.
- Review and Merge the PR.
- Switch to the local production branch to update.

### Following these steps ensures that my hotfix is properly reviewed, tested, and merged into the production branch while maintaining a clean and organized repository. This process helps me prevent conflicts, ensure code quality, and facilitate collaboration within the team.

# Answer to the question number : 2

### To find particular items that belong to each category in an array of menu collections, we can go through these steps:

To begin with, iterate through each menu collection. For each collection, make a map that links menu item IDs to their respective objects. At that point, loop through each category within the collection, and utilize the map to retrieve the menu items based on the IDs recorded in the category's menuItemsIds. At last, store or display the results by matching the category names with their corresponding menu items. 