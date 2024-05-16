SELECT lower(table_name)                                                                                as 表,
       lower((select TABLE_COMMENT from INFORMATION_SCHEMA.TABLES b where b.TABLE_NAME = a.table_name)) as 名称,
       underlineToCamel(COLUMN_NAME)                                                                               as 字段名称,
       COLUMN_TYPE                                                                                      as 字段类型,
       CHARACTER_MAXIMUM_LENGTH                                                                         AS 最大长度,
       (
           CASE
               WHEN is_nullable = 'NO' THEN
                   '否'
               ELSE
                   '是'
               END
           )                                                                                            AS 是否可空,
       (
           CASE
               WHEN column_key = 'PRI' THEN
                   '是'
               ELSE
                   '否'
               END
           )                                                                                            AS 是否主键,
       COLUMN_DEFAULT                                                                                   as 默认值,
       COLUMN_COMMENT                                                                                   as 描述
FROM INFORMATION_SCHEMA.COLUMNS a
WHERE (table_name like 'bus_con%'
    or TABLE_NAME = 'elec_contract_log'
    or TABLE_NAME = 'gzt_auxiliary_contract'
    or TABLE_NAME = 'gzt_charges_details_contract'
    or TABLE_NAME = 'gzt_transport_goods_details_contract'
    or TABLE_NAME = 'gzt_transport_take_contract'
    or TABLE_NAME = 'sys_upload_file_log') and TABLE_NAME not like '%copy%'
order by TABLE_NAME, ORDINAL_POSITION
