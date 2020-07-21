package models


import java.time.Instant

import models.Reed.ReedId


case class Reed(id: ReedId,
                model: String,
                strength: Int,
                casePosition: Int,
                openedAt: Instant,
                retiredAt: Option[Instant])

package object Reed {

  type ReedId = String
}