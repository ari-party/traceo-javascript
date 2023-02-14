import * as os from "os";
import { IMetrics } from "../../../core/interfaces/metrics";
import { MemoryUsageMetricType } from "../../../transport/metrics";
import { toDecimalNumber } from "../../helpers";

export class MemoryUsageMetrics implements IMetrics<MemoryUsageMetricType> {
  constructor() {}

  public collect(): MemoryUsageMetricType {
    return {
      memory_usage_mb: this.usedMemory,
      memory_usage_percentage: this.percentageUsage,
    };
  }

  private get percentageUsage() {
    return toDecimalNumber((this.usedMemory / this.totalMemory) * 100);
  }

  private get usedMemory() {
    return Math.round(this.totalMemory - this.freeMemory);
  }

  private get freeMemory() {
    return Math.round(os.freemem() / 1024 / 1024);
  }

  private get totalMemory() {
    return Math.round(os.totalmem() / 1024 / 1024);
  }
}
