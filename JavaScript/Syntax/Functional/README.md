# Funcationl JavaScript

## ForEach and Projection

- **ProjectForEach**: Simple projection with ForEach
- **ProjectMap**: Add Array.map to array and  use Projection function to change an array
- **ProjectMapOnRecords**: For each record, use map function to build {id, title} pairs.

## Filter

- **FilterOnRecords**: Use ForEach to filter an array of records
- **FilterMapOnLetter**: Filter an array of letters to see those > 'C'.
 
## Flatten

- **Flatten**: Take two arrays and merge them into one
- **FlattenMergeAll**: Merge two arrays into one with custom Array.MergeAll function
- **FlattenMergeAllRecords**: Use **map** and **MergeAll** to merge two complex arrays
- **FlattenMergeAllThreeLevels**: Use **map** and **MergeAll** to merge two nested arrays

## Special

- **ChainFilterMap**: 

## Map

The JavaScript **map** function takes an array of one sort, and converts it into a modified array of a similar type. You pass it to a callback, and each element in the array will be passed to it. Inside that callback, you can transform the objects in the array. After map returns, you have a new array, one in which each element of your array has been transformed by your callback.
