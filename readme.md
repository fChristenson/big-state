# Big state data

## What we will cover

- How can we deal with a large Redux state?

## Notes

0. Consider changing the UX to not require all the data at the same time
1. Always paginate big data sets
2. Only put global data on the store and isolate local data to the state
3. Use localStorage and PureComponent/shouldComponentUpdate/Memoize for shared data that causes performance problems
4. Normalize data with object and id's such as you would do with a relational database
5. Use a WebWorker to offload the main thread (This is advanced and should be a last resort)
6. Use websockets to stream the data in real time. (Only do this if you are dealing with data that is so big that it can't be done any other way)
