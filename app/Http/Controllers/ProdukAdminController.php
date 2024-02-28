<?php

namespace App\Http\Controllers;

use App\Models\produk;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;



class ProdukAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produk = Produk::all();
        return inertia::render('Admin/Product', [
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $produk = new Produk();
        $produk->foto = $request->foto;
        $produk->produk_id = $request->produkId;
        $produk->nama_produk = $request->namaProduk;
        $produk->harga = $request->harga;
        $produk->stock = $request->stock;
        $produk->kategori = $request->kategori;
        $produk->ukuran = $request->ukuran;
        $produk->warna = $request->warna;
        $produk->deskripsi = $request->deskripsi;
        $produk->save();
        return redirect()->back()->with('message', 'Berhasil Di Masukan');
    }

    /**
     * Display the specified resource.
     */
    public function show(produk $produk)
    {
        $produk = Produk::all();
        return inertia::render('Admin/Product', [
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produk $produk, Request $request)
    {
        $id = $request->query('id');
        $produk = Produk::where('produk_id', $id)->first();

        if (!$produk) {
        };

        return Inertia::render('Admin/ProductEdit', [
            'idproduk' => $produk,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $produk = Produk::findOrFail($request->id);

        produk::where('id', $request->id)->update([
            'produk_id' => $request->produkId,
            'nama_produk' => $request->namaProduk,
            'harga' => $request->harga,
            'stock' => $request->stock,
            'kategori' => $request->kategori,
            'ukuran' => $request->ukuran,
            'warna' => $request->warna,
            'deskripsi' => $request->deskripsi,
        ]);
        return redirect()->back()->with('message', 'Berhasil menghapus');
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produk $produk, Request $request)
    {
        $id = $request->input('id');
        $produk = Produk::where('produk_id', $id)->first();
        $produk->delete();

        return redirect()->back()->with('message', 'Berhasil menghapus');
    }
}