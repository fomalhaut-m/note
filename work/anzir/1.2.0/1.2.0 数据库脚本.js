use anzir_mc
// 默认权重
db.mc_supply.updateMany({"weight": {"$exists": false}},
    {
        "$set": {
            weight: 0.0
        }
    }
    )


use anzir_uc

// 默认权重
db.t_identity_author.updateMany({signed: {"$exists": false}, apvState: "AUDIT_PASS"},
    {
        "$set": {
            signed: 1
        }
    }
    )