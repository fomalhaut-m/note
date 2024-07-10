@Luke
 返回实体部分字段. 用于处理 实体部分字段内容较大的情况:
1. 投影
```
public interface MyEntityProjection {
    String getField1();
    String getField2();
}
```
```
public interface MyEntityRepository extends MongoRepository<MyEntity, String> {
    List<MyEntityProjection> findByField1(String field1);
}
```
2 . MongoTemplate
```
@Autowired
private MongoTemplate mongoTemplate;

public List<MyEntity> findCustomByField1(String field1) {
    Query query = new Query();
    query.addCriteria(Criteria.where("field1").is(field1));
    query.fields().include("field1").include("field2");
    return mongoTemplate.find(query, MyEntity.class);
}
```
3. @Aggregation
```
public interface MyEntityRepository extends MongoRepository<MyEntity, String> {

    @Aggregation(pipeline = {
        "{ '$match': { 'field1': ?0 } }",
        "{ '$project': { 'field1': 1, 'field2': 1 } }"
    })
    List<MyEntity> findCustomAggregation(String field1);
}
```
4. @Query
```
public interface MyEntityRepository extends MongoRepository<MyEntity, String> {

    @Query(value = "{ 'field1' : ?0 }", fields = "{ 'field1' : 1, 'field2' : 1 }")
    List<MyEntity> findCustomByField1(String field1);
}
```