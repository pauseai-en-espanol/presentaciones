// Recorta a la persona de una foto con Vision de macOS (lo mismo que «separar sujeto» en Fotos) y guarda un PNG
// transparente, ajustado a la silueta.
//
//   swift recorte.swift foto.jpg recorte.png
import CoreImage
import Foundation
import Vision

let args = CommandLine.arguments
guard args.count == 3, let foto = CIImage(contentsOf: URL(fileURLWithPath: args[1])) else {
  FileHandle.standardError.write("uso: swift recorte.swift foto.jpg recorte.png\n".data(using: .utf8)!)
  exit(1)
}
let handler = VNImageRequestHandler(ciImage: foto)
let peticion = VNGenerateForegroundInstanceMaskRequest()
try handler.perform([peticion])
guard let resultado = peticion.results?.first else {
  FileHandle.standardError.write("No he encontrado a nadie en la foto\n".data(using: .utf8)!)
  exit(1)
}
let buffer = try resultado.generateMaskedImage(
  ofInstances: resultado.allInstances, from: handler, croppedToInstancesExtent: true)
try CIContext().writePNGRepresentation(
  of: CIImage(cvPixelBuffer: buffer), to: URL(fileURLWithPath: args[2]), format: .RGBA8,
  colorSpace: CGColorSpace(name: CGColorSpace.sRGB)!)
