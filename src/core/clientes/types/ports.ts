import { FilterRequestDTO, GetListRequestDTO } from "core/shared/types";
import { GetClienteRequestDTO, GetClientesResponseDTO } from "./dto";

export interface iHttpClient {
  list(dto: GetListRequestDTO, filterDTO?: FilterRequestDTO): Promise<GetClientesResponseDTO>
  get(dto: GetListRequestDTO): Promise<GetClienteRequestDTO>
}